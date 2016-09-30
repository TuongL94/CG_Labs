#version 410

uniform mat4 vertex_model_to_world;					// Model to World space matrix
uniform mat4 normal_model_to_world;
uniform sampler2D sampler;
uniform vec3 ka;									// Material ambient
uniform vec3 kd;									// Material diffuse
uniform vec3 ks;									// Material specular
uniform float shininess;
uniform vec3 light_position;
uniform vec3 camera_position;

in VS_OUT {
	vec3 fT;
	vec3 fN;
	vec3 fBN;
	vec3 fVert;
	vec2 fTC;
} fs_in;

out vec4 frag_color;

void main()
{
	mat3 tbn = mat3(fs_in.fT, fs_in.fBN, fs_in.fN);
	vec4 texels = texture(sampler,fs_in.fTC);
	vec4 mappedNormal = texels*2 - vec4(1.0,1.0,1.0,0.0);
	vec4 mappedWorldNormal = normal_model_to_world*mat4(tbn)*mappedNormal;  // The normal in world space

	vec3 worldPos = (vertex_model_to_world*vec4(fs_in.fVert,1)).xyz;
	vec3 N = normalize(mappedWorldNormal.xyz);
	vec3 L = normalize(light_position - worldPos); 
	vec3 V = normalize(camera_position - worldPos);
	vec3 R = normalize(reflect(-L,N));

	vec3 diffuse = kd*max(dot(L,N),0.0);
	vec3 specular = ks*pow(max(dot(V,R),0.0), shininess);

	frag_color.xyz = ka + diffuse + specular;
	frag_color.w = 1.0;
}
