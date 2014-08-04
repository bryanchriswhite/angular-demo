Truecoin Demo App
=================

Setup Development Environment
-----------------------------
These instructions are designed to be run in sequence.

Prerequisites:
* Python ~3.4
* Pip ~1.5
* PostgreSQL ~= 9.3
* Node >=0.10.21
* Npm (bundled with node)

###Back-end

####Virtualenv
If you don't already have `virtualenv` installed:
```bash
pip3 install virtualenv #pip3 is used here because most systems ship with python 2.x; pip3 is usually for python 3.x
```

Assuming you have `virtualenv` in your `$PATH` and `ENV` is where your virtualenv's live:
```bash
virtualenv truecoin && source ENV/$_/bin/activate
```
_feel free to replace "truecoin" with whatever you want_
_for additional information on [virtualenv](http://virtualenv.readthedocs.org/en/latest/) please visit [their documentation](http://virtualenv.readthedocs.org/en/latest/)_

####Install Dependencies
Install all python dependencies in your new virtualenv. From the project root:
```bash
pip -r requirements.txt #virtualenv provides pip (not pip3) because there's only 1 python version here
```

####Database Setup
This guide assumes that your `pg_hba.conf` is using `trust` (default for OSX) or `ident` (default for linux) for connections to `localhost`. If this is not the case, you must provide your username and password in `/truecoin/settings.py` In the `DATABASES` map.
```bash
createdb truecoin #creates database with same name as in truecoin/settings.py
./manage.py syncdb #tell django to create necessary tables
```
_If you're `pg_hba.conf` is using `ident` and you're having permission issues, make sure that you're running `manage.py` as the user listed in the `pg_hba.conf` line for `localhost` using `ident`_

####Run Development Server
```bash
./manage.py runserver 8000 #start django server on port 8000 (default)
```

###Front-end
```bash
cd demo-frontend
```

####Install Dependencies
```bash
npm i --dev #install all node dependencies, also installs bower and all bower dependencies
```

####Running task (e.g. starting the development server)
This project uses [grunt](http://gruntjs.com/using-the-cli) for task-running and building. The more significant of these tasks are:
* Default task, runs `jshint`, `test`, and `build`:
```bash
grunt #default task
```
* Run karma tests:
```bash
grunt test
```
* Run development server (watches for changes and reloads browser window using livereload):
```bash
grunt serve #start server, watch and open in browser
```
* Build a distribution (i.e. concatenate, minify, etc.), outputs to `demo-frontend/dist`
**NOTE:** the build process and production environment aren't complete yet! It is preferable at this time to run the app in the development environment!
