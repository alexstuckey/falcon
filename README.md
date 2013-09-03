falcon
======

The System Garden notification system. Built with RabbitMQ as its queue, falcon is a scalable messaging platform intended to be highly extendable.

##Methods
falcon is based around the concept of there being an arbitrary number of methods. Methods are simply a file in the methods directory.
This works quite well because it allows for easy extensibility in the future and for anyone who wants to adapt this app for themselves. There are only a few BETA methods at the moment:
* Email (through SMTP or sendmail)
* SMS (through [Nexmo](https://www.nexmo.com/))
