from django.db import models
from ckeditor.fields import RichTextField 
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Social_links(models.Model):
    sno=models.UUIDField(_("Serial_No"))
    github=models.URLField()
    linkedin=models.URLField()
    telegram=models.URLField()
    facebook=models.URLField()
    twitter=models.URLField()
    whatsapp=models.URLField()

class Experience(models.Model):
    sno=models.UUIDField()
    company=models.CharField(max_length=250)
    role=RichTextField()
    designation=models.CharField(max_length=150)
    months=models.PositiveIntegerField()
    year=models.PositiveIntegerField()
    
class Education(models.Model):
    sno=models.UUIDField(auto_created=True)
    course=models.CharField(max_length=150)
    board=models.CharField(max_length=150)
    name=models.CharField(max_length=500)
    marks=models.DecimalField(decimal_places=2,max_digits=4)
    speciality=models.CharField(max_length=150)



class Certificates(models.Model):
    sno=models.UUIDField(_("serial_no"))
    link=models.URLField()
    name=models.CharField(max_length=150)
    is_verified=models.BooleanField(default=False)
    months=models.PositiveIntegerField()
    year=models.PositiveIntegerField()

class Link(models.Model):
    sno=models.UUIDField(_("serial_no"))
    name=models.CharField(max_length=150)
    link=models.URLField(_("link"))

class Resume(models.Model):
    sno = models.UUIDField(auto_created=True)
    objective=RichTextField()
    first_name= models.CharField(max_length=150)
    last_name= models.CharField(max_length=150)
    primary_contact_no=PhoneNumberField(_("contact_no"))
    secondary_contact_no=PhoneNumberField(_("contact_no"))
    primary_email= models.EmailField()
    alternative_email= models.EmailField()
    address= models.CharField(max_length=500)
    pin_code= models.PositiveIntegerField()
    declaration=RichTextField()
    social_links=models.ForeignKey(Social_links,on_delete=models.CASCADE)
    experience=models.ForeignKey(Experience,on_delete=models.CASCADE)
    education=models.ForeignKey(Education,on_delete=models.CASCADE)
    certificates=models.ForeignKey(Certificates,on_delete=models.CASCADE)
    link=models.ForeignKey(Link,on_delete=models.CASCADE)
    
