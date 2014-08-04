Truecoin Demo App
=================

Setup Development Environment
-----------------------------

Prerequisites:
* Python ~3.4
* Pip ~1.5
* PostgreSQL ~= 9.3
* Node >=0.1.21
* Npm (bundled with node)

###Back-end

####Virtualenv
If you don't already have `virtualenv` installed:
```bash
pip3 install virtualenv #pip3 is used here because most systems ship with python 2.x; pip3 is usually for python 3.x
```

Assuming you have `virtualenv` installed and `ENV` is where your virtualenv's live:
```bash
virtualenv truecoin && source ENV/$_/bin/activate
```
_feel free to replace "truecoin" with whatever you want_

####Python Dependencies
Install all python dependencies in your new virtualenv. From the project root:
```bash
pip -r requirements.txt #virtualenv provides pip (not pip3) becasue there's only 1 python version here
```

####Database Setup
This guide assumes that your `pg_hba.conf` is using `trust` (default for OSX) or `ident` (default for linux) for connections to `localhost`. If this is not the case, you must provide your username and password in `/truecoin/settings.py` In the `DATABASES` map.
```bash
createdb truecoin #creates database with same name as in truecoin/settings.py
./manage.py syncdb #tell django to create necessary tables
```
_If you're `pg_hba.conf` is using `ident` and you're having permission issues, make sure that you're running `manage.py` as the user listed in the `pg_hba.conf` line for `localhost` using `ident`_


###Front-end
```bash
cd demo-frontend
```

####Npm
