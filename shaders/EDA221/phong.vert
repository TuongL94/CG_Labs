#version 410

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;

uniform mat4 vertex_world_to_clip;					// Model to Clip space matrix
uniform mat4 vertex_model_to_world;					// Model to World space matrix
uniform mat4 normal_model_to_world;					// Inverse transpose
uniform vec3 light_position;						// Position of the light in world space
uniform vec3 camera_position;						// Camera position in world space

out VS_OUT {
	vec3 fN;		// Normal vector
	vec3 fL;		// Light vector
	vec3 fV;		// View vector
} vs_out;

void main()
{
	vec3 worldPos = (vertex_model_to_world*vec4(vertex,1)).xyz;
	vs_out.fN = (normal_model_to_world*vec4(normal,0)).xyz;
	vs_out.fL = light_position - worldPos; 
	vs_out.fV = camera_position - worldPos;
	gl_Position = vertex_world_to_clip*vec4(vertex,1);
}
