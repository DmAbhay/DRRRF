// Greeting.jsx
const Greeting2 = ({ name, age }) => {
    return (
        <h2>
            Hello, {name}!{'\u00A0\u00A0\u00A0\u00A0'} {/*for space*/}
            {age ? `Your age is ${age}` : 'Age not available'}
        </h2>
    );
};

export default Greeting2;





