from django.urls import path,include
from  . import  views
from .views import tasks

urlpatterns = [
    path('', views.index),
    path('data', views.test_data),
    path('tasks/',tasks ),
    path('tasks/<int:id>',tasks),

]
