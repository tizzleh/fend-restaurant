# FEND-restaurant

This project is part of a Udacity course. The task was to implement responsive design and offline first capabilities.

## Getting Started

In order to use this app you must install locally. Service Worker usually only works through HTTPS, serving through localhost is an exception to the rule.

The service-worker is not precaching any resources, you must visit each page first in order for it to be cached. Please give your browser sufficient time to download and cache the resources before trying to test the service worker.

### Installing

Step One: Clone the repository to your local machine.

```
git clone https://github.com/tizzleh/fend-restaurant.git
```
Step Two: 'cd' into the cloned directory.

```
cd fend-restaurant
```
Step Three: Install Gulp.

```
npm install gulp-cli -g
npm install gulp -D
```
Step Four: Build project

```
gulp
```
Step Five: Run project

```
gulp clean && gulp serve:dist
```

## Viewing the project.
BrowserSync will open browser and you can interact with application. Or visit
```
http://localhost:3000/
```

## Contributing

This project is a requirement for a Udacity course, no contributions will be accepted.

## Authors

* **Udacity** - *Initial work* - [Udacity](https://github.com/udacity)
* **Ty Harlacker** - *JavaScript* - [tizzleh](https://github.com/tizzleh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Udacity
* My parents
* My project mentor for not letting me stress about deadlines.
