from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Question
from .serializers import QuestionSerializer


class QuestionViewSet(ReadOnlyModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
