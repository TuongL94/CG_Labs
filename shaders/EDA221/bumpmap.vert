#version 410

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 texcoord;
layout (location = 3) in vec3 tangent;
layout (location = 4) in vec3 binormal;

uniform mat4 vertex_model_to_world;
uniform mat4 vertex_world_to_clip;

out VS_OUT {
	vec3 fT;
	vec3 fN;
	vec3 fBN;
	vec3 fVert;
	vec2 fTC;
} vs_out;


void main()
{
	vs_out.fTC = vec2(texcoord.x, texcoord.y);
	vs_out.fT = tangent;
	vs_out.fN = normal;
	vs_out.fBN = binormal;
	vs_out.fVert = vertex;
	gl_Position = vertex_world_to_clip * vertex_model_to_world * vec4(vertex, 1.0);
}



