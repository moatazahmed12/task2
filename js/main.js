// بداية دالة التحقق (validate)
function validate() {
    var userName = document.getElementById("username").value; // الحصول على قيمة اسم المستخدم
    var email = document.getElementById("email").value; // الحصول على قيمة البريد الإلكتروني
    var password = document.getElementById("password").value; // الحصول على قيمة كلمة المرور
    var confirmPassword = document.getElementById("confirmpassword").value; // الحصول على قيمة تأكيد كلمة المرور
    var errorMessage = document.getElementById("errorMessage"); // تحديد حقل رسالة الخطأ

    // تنسيق رسالة الخطأ
    errorMessage.style.padding = "10px"; // تعيين الحشو
    errorMessage.style.backgroundColor = "red"; // تعيين لون خلفية الرسالة
    errorMessage.style.color = "#fff"; // تعيين لون النص إلى الأبيض
    errorMessage.style.textAlign = "center"; // محاذاة النص في المنتصف
    errorMessage.style.transition = "all .5s ease-in"; // تأثير الانتقال
    errorMessage.style.marginBottom = "20px"; // تعيين المسافة السفلية

    var text = ""; // متغير لتخزين النص في رسالة الخطأ

    // التحقق من إدخال البيانات
    if (email == "" && userName == "" && password == "" && confirmPassword == "") {
        text = "please Insert Valid Data"; // نص رسالة الخطأ
        errorMessage.innerHTML = text; // عرض رسالة الخطأ
        return false; // إرجاع قيمة خاطئة
    } else if (userName.length < 5 || userName.length > 15) {
        text = "please Insert 5-15 character in username"; // نص رسالة الخطأ
        errorMessage.innerHTML = text; // عرض رسالة الخطأ
        return false; // إرجاع قيمة خاطئة
    } else if (email.indexOf("@") == -1) {
        text = "Please Enter Valid Email"; // نص رسالة الخطأ
        errorMessage.innerHTML = text; // عرض رسالة الخطأ
        return false; // إرجاع قيمة خاطئة
    } else if (password.length < 8) {
        text = "please Insert atleast 8 character in password"; // نص رسالة الخطأ
        errorMessage.innerHTML = text; // عرض رسالة الخطأ
        return false; // إرجاع قيمة خاطئة
    } else if (password != confirmPassword) {
        text = "please Matched password"; // نص رسالة الخطأ
        errorMessage.innerHTML = text; // عرض رسالة الخطأ
        return false; // إرجاع قيمة خاطئة
    } else {
        return true; // إرجاع قيمة صحيحة إذا كانت جميع المدخلات صحيحة
    }
}
// نهاية دالة التحقق
