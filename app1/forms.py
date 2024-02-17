from django import forms
from .models import Employee

class TestForm(forms.Form):
    text = forms.CharField(label='文字入力')
    num = forms.IntegerField(label='数量')


class EmployeeAdd(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['name','mail','gender','department','year','created_at']
