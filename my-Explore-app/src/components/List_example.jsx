export default function ListExample() {
    const fruits = ["Lichi", "Watermelon", "CustardApple", "Orange", "DragonFruit", "Banana", "Chiku", "Gauva"];
    return (
        <>
            <h2>List Examples :</h2>
            <ol>
                {fruits.map((fruit, i) =>
                    <li key={i}>{fruit}</li>
                )}
            </ol>
        </>
    )
}