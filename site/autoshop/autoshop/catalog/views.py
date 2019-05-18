from django.shortcuts import render_to_response, render
from .models import Auto, Order
from django.http import JsonResponse
# Create your views here.

def index(request):
    return render(
        request, 'index.html'
    )

def main(request):
    return JsonResponse(list(Auto.objects.values()), safe=False)
