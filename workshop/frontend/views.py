from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')


def dashboard(request):
    return render(request, 'frontend/dashboard.html')
