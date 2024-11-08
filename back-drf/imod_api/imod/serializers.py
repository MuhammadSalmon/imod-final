from rest_framework import serializers
from .models import Category, Product, News, Vacancy, Image, ImageProduct

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ImageProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageProduct
        fields = ['id', 'image']

class ProductSerializer(serializers.ModelSerializer):
    images = ImageProductSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'name_en','name_ru','name_tg', 'details', 'details_en', 'details_ru', 'details_tg', 
                  'description', 'description_en', 'description_ru', 'description_tg', 'specifications', 'specifications_en', 'specifications_ru', 'specifications_tg', 'category', 'images']
 
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']

class NewsSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = News
        fields = [
            'id', 'title', 'title_en', 'title_ru', 'title_tg', 
            'content', 'content_en', 'content_ru', 'content_tg', 
            'created_at', 'author', 'custom_date', 'images'
        ]

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'

    def validate_title(self, value):
        if Vacancy.objects.filter(title=value).exists():
            raise serializers.ValidationError("Vacancy with this title already exists.")
        return value
