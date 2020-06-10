from django.db import models



# Create your models here.

# api/models.py


class Courses(models.Model):
	name = models.CharField(max_length=100)
	catagory = models.CharField(max_length=100)
	code = models.IntegerField()
	paths = []

def __init__(self,name,cata,code,paths):
	self.name = name
	self.catagory = cata
	self.code = code
	self.paths = paths

def __str__(self):
        return '%d %s %s %s' % (self.id,self.name, self.code, self.catagory)


class pathways(models.Model):
	name = models.CharField(max_length=100)
	desc = models.TextField()
	classes = models.ManyToManyField(Courses)

def __init__(self,name,desc):
	self.name = name
	self.desc = desc

def __init__(self,name,desc,inqu):
	self.name = name
	self.desc = desc
	self.save()
	for x in inqu:
		self.classes.add(x)
	self.save()

def __str__(self): #think of this as a print for the entry
        return '%s %s' % (self.name, self.desc)

