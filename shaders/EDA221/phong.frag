#version 410

uniform vec3 ka; // Material ambient
uniform vec3 kd; // Material diffuse
uniform vec3 ks; // Material specular
uniform float shininess;

in VS_OUT {
	vec3 fN;		// Normal vector from VS
	vec3 fL;		// Light vector from VS
	vec3 fV;		// View vector from VS
} fs_in;

out vec4 fColor;

void main()
{
	vec3 N = normalize(fs_in.fN);
	vec3 L = normalize(fs_in.fL);
	vec3 V = normalize(fs_in.fV);
	vec3 R = normalize(reflect(-L,N));
	vec3 diffuse = kd*max(dot(L,N),0.0);
	vec3 specular = ks*pow(max(dot(V,R),0.0), shininess);
	fColor.xyz = ka + diffuse + specular;
	fColor.w = 1.0;
}