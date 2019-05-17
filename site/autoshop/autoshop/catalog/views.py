from django.shortcuts import render_to_response
from .models import Auto, Order
from django.http import JsonResponse
# Create your views here.

def main(request):
    return JsonResponse(list(Auto.objects.values()), safe=False)