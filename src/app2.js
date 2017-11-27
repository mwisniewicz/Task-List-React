console.log("App.js is running!");

var app = {
    title: 'This is Title',
    subtitle: 'Subtitle',
    options: ['One']
};

var template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <ol>
        <li>Item 1</li>
        <li>Item 2 </li>
    </ol>
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

var user = {
    name: 'Mikey',
    age: 12
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);