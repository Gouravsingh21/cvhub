from django.contrib import admin
from .models import Education,Experience, Link,Resume,Social_links, Certificates
# Register your models here.
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Link)
admin.site.register(Resume)
admin.site.register(Social_links)
admin.site.register(Certificates)