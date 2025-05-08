export function BookList() {


	const books = [
		{ id: 101, title: 'React Basics', author: 'Dan' },
		{ id: 102, title: 'Learning JavaScript', author: 'Kyle' },
		{ id: 103, title: 'CSS Mastery', author: 'Andy' }
	]
	return (
		<>
			<div>
				<ul>
					{
						books.map(book => (
							<BookCard  key={book.id} book={book} />
						))
					}
				</ul>
			</div>
		</>
	)

}


const BookCard = ({ book }) => {

	return (
		<div>
			<h4>Title: {book.title}, Author: {book.author}</h4>
		</div>
	)
}