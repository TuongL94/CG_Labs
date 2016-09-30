#version 410

uniform samplerCube skyboxTexture;

in VS_OUT {
	vec3 fN;
} fs_in;

out vec4 frag_color;

void main()
{
	frag_color = texture(skyboxTexture,fs_in.fN);

}
