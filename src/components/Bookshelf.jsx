import { useState } from 'react';

// Functional component Bookshelf
const Bookshelf = () => {

    //State Variables
    //Create a state variable books to store an array of book objects.
    const [books, setBooks] = useState ([

        { title: 'Fourth Wing', author: 'Rebecca Yarros' },

        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },

    ]);

    //Define another state variable newBook to handle the inputs for new book additions. 
    //This will be an object with a title key and an author key, which should hold empty strings to start.   

    const [newBook, setNewBook] = useState({ title: '', author: '' });

    //Create a function named handleInputChange that will be triggered each time the user types in an input field.
    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

    };

    //Create a function named handleSubmit that will execute when the form is submitted.
    const handleSubmit = (event) => {
        //The function should also take an event object as its argument. 
        //Begin the function by stopping the default form submission action using event.preventDefault().
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
      };    
        
      return (

        <div className="bookshelfDiv">
          <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form for adding a new book */}
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newBook.title}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Author:
                <input
                  type="text"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="submit">Add Book</button>
            </form>
          </div>
          <div className="bookCardsDiv">
            {/* Display list of books */}
            {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      );
      
};
    

export default Bookshelf;