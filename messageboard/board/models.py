from django.db import models
from django.forms import ModelForm
import time

class User(models.Model):
    name = models.CharField(unique=True, max_length=20)
    register_date = models.DateTimeField(auto_now_add=True)
    avatar = models.ImageField(upload_to='avatars', blank=True) # AVATAR

    def __str__(self):
        return self.name
    

class Message(models.Model):
    # ----------------------------------------------------------------
    # 完善Message模型的代码，共有四个字段
    # user: ForeignKey, on_delete策略使用CASCADE
    # title: CharField, max_length=100
    # content: CharField, max_length=500
    # pub_date: DateTimeField, auto_now_add=True
    # ----------------------------------------------------------------
    user=models.ForeignKey(to="User",on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    content=models.CharField(max_length=500)
    pub_date=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

    def make_json(self):
        #time_array=time.strptime(self.pub_date,"%Y-%m-%d %H:%M:%S")
        #time_stamp = int(time.mktime(time_array))
        return {
            "title":self.title,
            "content":self.content,
            "timestamp":int(self.pub_date.timestamp())
        }
        