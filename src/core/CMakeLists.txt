cmake_minimum_required (VERSION 3.0)

project (bonobo
	VERSION 0.2
	LANGUAGES CXX
)

set (
	SOURCES

	"Bonobo.cpp"
	"InputHandler.cpp"
	"Log.cpp"
	"LogView.cpp"
	"Misc.cpp"
	"opengl.cpp"
	"Types.cpp"
	"various.cpp"
	"Window.cpp"
)

add_library (${PROJECT_NAME} ${SOURCES})

target_include_directories (${PROJECT_NAME} PRIVATE ${IMGUI_INCLUDE_DIRS})
target_include_directories (${PROJECT_NAME} PRIVATE ${GLM_INCLUDE_DIRS})
target_include_directories (${PROJECT_NAME} PRIVATE "${CMAKE_SOURCE_DIR}/src")
target_include_directories (${PROJECT_NAME} PRIVATE "${CMAKE_SOURCE_DIR}/src/external")

set_property (TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 14)
set_property (TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD_REQUIRED ON)
set_property (TARGET ${PROJECT_NAME} PROPERTY CXX_EXTENSIONS OFF)

target_link_libraries (${PROJECT_NAME} ${IMGUI_LIBRARY} external_libs glfw ${LUGGCGL_EXTRA_LIBS})
