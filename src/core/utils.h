#pragma once

#include <glm/glm.hpp>


template<typename T, glm::precision P> glm::tvec3<T, P>
divW(glm::tvec4<T, P> const& vector)
{
	return glm::tvec3<T, P>(vector) / vector.w;
}

template<typename T, glm::precision P> int
minElementIndex(glm::tvec2<T, P> const& vector)
{
	return vector.x < vector.y;
}

template<typename T, glm::precision P> int
minElementIndex(glm::tvec3<T, P> const& vector)
{
	return (vector.x < vector.z) ? vector.y >= vector.x : 2 * (vector.z > vector.y);
}


namespace bonobo {
	template<typename T>
	constexpr T pi = T(3.1415926535897932385);
	template<typename T>
	constexpr T two_pi = T(2.0 * pi<double>);
}
