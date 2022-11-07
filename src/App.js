const App = () => {
    const categories = [
        { id: 1, title: "Hats" },
        { id: 2, title: "Jackets" },
        { id: 3, title: "Sneakers" },
        { id: 4, title: "Woman's" },
        { id: 5, title: "Man's" }
    ]
    return (
        <div className="categories-container">
            {
                categories
                    .map((category) => {
                        return <div key={category.id}
                                    className="category-container">
                            <div className="background-image" />
                            <h1>{category.title}</h1>
                            <p>shop now</p>
                        </div>
                    })
            }
        </div>
    )
}

export default App
