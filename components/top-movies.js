export function TopMovies(props) {
	return (
		<Section>
			<h1>Top Movies</h1>
			<MoviesList movies={props.movies} />
		</Section>
	);
}
