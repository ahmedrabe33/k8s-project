FROM nginx:1.25-alpine
# نسخ ملف الواجهة لمجلد Nginx الافتراضي
COPY index.html /usr/share/nginx/html/index.html
# تغيير الصلاحيات للعمل كـ Non-root إذا لزم الأمر في بعض بيئات K8s
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]