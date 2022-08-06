#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'heartFailure.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()

# upon broken database: 

# Step 1: Delete the db.sqlite3 file.
# Step 2 : $ python manage.py migrate
# Step 3 : $ python manage.py makemigrations
# Step 4: Create the super user using $ python manage.py createsuperuser

# new db.sqlite3 will generate automatically