FROM node:18-alpine
# تأمين بيئة العمل
WORKDIR /usr/src/app
# نسخ الملفات الأساسية وتثبيت المكتبات
COPY package*.json ./
RUN npm install --only=production
# نسخ بقية الكود
COPY . .
# تشغيل التطبيق بمستخدم غير روت لزيادة الأمان في K8s
USER node
EXPOSE 3000
CMD ["node", "app.js"]