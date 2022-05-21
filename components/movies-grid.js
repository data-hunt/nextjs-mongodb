function PostsGrid(props) {
	const { movies } = props;

	return (
		<ul>
			{movies.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
}
