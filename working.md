-App does not need state

-App has react router fors
        -/search: SearchComponent
        -/ : Shelves

-BookComponent:

        -img (url: Link to Image)
        -Input: ( Shelf type)
        -OnClick: Update(book, shelfType) -> Callback

        Todo:
        Problem:
                On clicking update, state of shelf would need update.
                Define callback in component.

                Pass update function as prop.
                        - updateShelves()
                                -getState()
                                -reRender() : How would I go over all shelves?
                OR
                        completionEvent():
                                Listen in to this event on ShelfPage
                                Update State
                OR
                        use same technique as the Search Form

-ShelfComponent:

        props: BookType

        -State:
                -Books
        -Methods:
                -GetBooks(BookType)
                        this.setState(utils.getBook(BookType));
                setState(Books)
                filterMethod(result)?

        -Render:
                -GetBooks()
                -Books.map(
                        <BookComponent refreshMethod=updateState()/>
                )

-SearchComponent:
        Todo: Reference other app for structure

        -State: Empty or All
        -SearchForm:
                Input
                Filter State on query
