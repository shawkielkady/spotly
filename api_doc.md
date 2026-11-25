# Spotly Backend API Documentation

توثيق كامل لجميع الـ **Endpoints** والـ **Request / Response** المطلوبة لتشغيل مشروع **Spotly** وربط الواجهة الأمامية (Frontend) بالباك إند.

---

## 1. القواعد العامة (General Conventions)

- **Base URL**: `https://api.spotly.eg/api/v1` (أو `http://localhost:8000/api/v1`)
- **Headers**:
  - `Accept: application/json`
  - `Content-Type: application/json` (أو `multipart/form-data` عند رفع الصور مثل إيصال InstaPay أو صور المساحات)
  - `Authorization: Bearer <token>` (للـ Endpoints المحمية)

### هيكل الاستجابة الموحد (Standard Response Envelope)

**نجاح العملية (`200` / `201`):**
```json
{
  "success": true,
  "message": "تمت العملية بنجاح",
  "data": {}
}
```

**خطأ في التحقق (`422 Unprocessable Entity`):**
```json
{
  "success": false,
  "message": "يرجى التحقق من البيانات المدخلة",
  "errors": {
    "email": ["البريد الإلكتروني مسجل بالفعل"]
  }
}
```

**غير مصرح (`401 Unauthorized`):**
```json
{
  "success": false,
  "message": "انتهت صلاحية الجلسة، يرجى تسجيل الدخول مرة أخرى"
}
```

---

## 2. المصادقة والحسابات (Authentication)
> الصفحات المرتبطة: `LoginPage`، `RegisterPage`، `Header`

### 2.1 إنشاء حساب جديد
`POST /auth/register`

**Request Body:**
```json
{
  "full_name": "محمد أحمد",
  "email": "name@example.com",
  "phone": "01012345678",
  "password": "Password123!",
  "password_confirmation": "Password123!",
  "agreed_terms": true
}
```

**Response (`201 Created`):**
```json
{
  "success": true,
  "message": "تم إنشاء الحساب بنجاح",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 12,
      "full_name": "محمد أحمد",
      "email": "name@example.com",
      "phone": "01012345678",
      "role": "client",
      "avatar": null
    }
  }
}
```

### 2.2 تسجيل الدخول
`POST /auth/login`

**Request Body:**
```json
{
  "email": "name@example.com",
  "password": "Password123!",
  "remember": true
}
```

**Response (`200 OK`):**
```json
{
  "success": true,
  "message": "تم تسجيل الدخول بنجاح",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 12,
      "full_name": "محمد أحمد",
      "email": "name@example.com",
      "phone": "01012345678",
      "role": "client"
    }
  }
}
```

### 2.3 بيانات المستخدم الحالي
`GET /auth/me` *(Auth Required)*

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "id": 12,
    "full_name": "محمد أحمد",
    "email": "name@example.com",
    "phone": "01012345678",
    "role": "client",
    "created_at": "2024-11-01T10:00:00Z"
  }
}
```

### 2.4 تسجيل الخروج
`POST /auth/logout` *(Auth Required)*

**Response (`200 OK`):**
```json
{
  "success": true,
  "message": "تم تسجيل الخروج بنجاح"
}
```

---

## 3. البيانات الأساسية والرئيسية (Master Data & Home)
> الصفحات والمكونات المرتبطة: `Hero`، `CategoriesSection`، `RecommednedSec`، `SpacesFilter`

### 3.1 البيانات المرجعية للمنصة (مدن، مناطق، أنواع المساحات، إعدادات إنستاباي)
`GET /master-data`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "cities": [
      {
        "id": 1,
        "name": "القاهرة",
        "districts": [
          { "id": 10, "name": "الزمالك" },
          { "id": 11, "name": "مصر الجديدة" },
          { "id": 12, "name": "التجمع الخامس" }
        ]
      },
      {
        "id": 2,
        "name": "الجيزة",
        "districts": [
          { "id": 20, "name": "6 أكتوبر" },
          { "id": 21, "name": "الشيخ زايد" },
          { "id": 22, "name": "المهندسين" }
        ]
      },
      {
        "id": 3,
        "name": "الإسكندرية",
        "districts": [
          { "id": 30, "name": "محرم بك" },
          { "id": 31, "name": "سموحة" },
          { "id": 32, "name": "محطة الرمل" }
        ]
      }
    ],
    "space_types": [
      { "id": 1, "slug": "kiosks", "name": "أكشاك تجارية", "subtitle": "مواقع حيوية بالمولات" },
      { "id": 2, "slug": "popup", "name": "محلات مؤقتة", "subtitle": "Pop-up Stores" },
      { "id": 3, "slug": "booths", "name": "أجنحة معارض", "subtitle": "لعرض المنتجات" },
      { "id": 4, "slug": "malls", "name": "داخل المولات", "subtitle": "إقبال جماهيري ضخم" },
      { "id": 5, "slug": "events", "name": "مساحات فعاليات", "subtitle": "للحفلات والإطلاقات" }
    ],
    "price_range": {
      "min": 500,
      "max": 25000,
      "currency": "EGP"
    },
    "payment": {
      "method": "instapay",
      "ipa": "spotly@instapay",
      "phone": "01000000000",
      "beneficiary_name": "Spotly Commercial Spaces"
    }
  }
}
```

### 3.2 المساحات المميزة (Recommended)
`GET /spaces/recommended`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "كشك تجاري في سيتي سنتر الإسكندرية",
      "location": "الإسكندرية، محرم بك",
      "area": 12,
      "area_label": "12 م²",
      "price": 800,
      "period": "يوم",
      "badge": "متاح فوراً",
      "image": "https://cdn.spotly.eg/spaces/1/main.png"
    }
  ]
}
```

---

## 4. استكشاف المساحات وتفاصيل المساحة (Spaces)
> الصفحات المرتبطة: `SpacesPage`، `SpaceDetailsPage`، `ProductCard`

### 4.1 قائمة المساحات مع الفلترة والترتيب والترقيم
`GET /spaces`

**Query Parameters:**
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `city_id` | number | رقم المدينة |
| `district_id` | number | رقم المنطقة |
| `type` | string / array | نوع المساحة (مثال: `popup,kiosks`) |
| `min_price` | number | الحد الأدنى للسعر اليومي |
| `max_price` | number | الحد الأقصى للسعر اليومي |
| `min_area` | number | الحد الأدنى للمساحة بالمتر المربع |
| `max_area` | number | الحد الأقصى للمساحة بالمتر المربع |
| `duration` | string | `daily \| weekly \| monthly` |
| `start_date` | string | `YYYY-MM-DD` |
| `end_date` | string | `YYYY-MM-DD` |
| `sort` | string | `newest \| price_asc \| price_desc \| top_rated` |
| `page` | number | رقم الصفحة (افتراضي `1`) |
| `per_page` | number | عدد العناصر في الصفحة (افتراضي `6`) |

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 101,
        "title": "مساحة الزمالك الإبداعية",
        "location": "القاهرة، الزمالك",
        "area": 120,
        "area_label": "120 م²",
        "price": 3500,
        "period": "يوم",
        "badge": "متاح الآن",
        "is_favorited": false,
        "rating": 4.9,
        "reviews_count": 38,
        "image": "https://cdn.spotly.eg/spaces/101/main.png"
      }
    ],
    "meta": {
      "current_page": 1,
      "last_page": 8,
      "per_page": 6,
      "total": 48
    }
  }
}
```

### 4.2 تفاصيل مساحة محددة
`GET /spaces/:id`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "id": 101,
    "title": "كشك تجاري مجهز في سيتي سنتر الإسكندرية",
    "category_label": "معرض تجاري فاخر",
    "location": "الإسكندرية، محرم بك",
    "address": "محرم بك، الإسكندرية، بجوار المدخل الرئيسي للمركز التجاري",
    "coordinates": {
      "lat": 31.1992,
      "lng": 29.9097
    },
    "area": 12,
    "height": 3.2,
    "min_booking_days": 3,
    "store_type": "كشك تجاري داخلي",
    "price_per_day": 800,
    "service_fee_fixed": 200,
    "vat_percentage": 14,
    "availability_badge": "متاح للحجز الفوري",
    "description": "مساحة تجارية استثنائية (كشك مجهز بالكامل) تقع في قلب سيتي سنتر الإسكندرية...",
    "is_favorited": false,
    "rating": 4.8,
    "reviews_count": 24,
    "images": [
      { "id": 1, "url": "https://cdn.spotly.eg/spaces/101/1.png", "is_main": true, "label": "الواجهة الرئيسية" },
      { "id": 2, "url": "https://cdn.spotly.eg/spaces/101/2.png", "is_main": false, "label": null }
    ],
    "owner": {
      "id": 5,
      "name": "أحمد محمد",
      "initials": "أ ح",
      "is_verified": true,
      "response_time": "استجابة خلال ساعة",
      "managed_spaces_count": 14
    },
    "amenities": [
      { "key": "lighting", "label": "إضاءة كاملة" },
      { "key": "ac", "label": "تكييف مركزي" },
      { "key": "security", "label": "حراسة أمنية 24/7" },
      { "key": "wifi", "label": "واي فاي فائق السرعة" },
      { "key": "power", "label": "مقابس كهربائية متعددة" },
      { "key": "parking", "label": "مواقف سيارات متاحة" }
    ],
    "unavailable_dates": ["2024-11-10", "2024-11-11", "2024-11-12"],
    "reviews": [
      {
        "id": 1,
        "user_name": "محمود كريم",
        "user_initials": "م ك",
        "rating": 5,
        "comment": "مساحة رائعة جداً وخدمات ممتازة...",
        "created_at_human": "منذ أسبوعين"
      }
    ]
  }
}
```

### 4.3 إضافة تقييم لمساحة
`POST /spaces/:id/reviews` *(Auth Required)*

**Request Body:**
```json
{
  "rating": 5,
  "comment": "الكشك مجهز بالكامل والتعامل ممتاز."
}
```

**Response (`201 Created`):**
```json
{
  "success": true,
  "message": "تم إضافة تقييمك بنجاح",
  "data": {
    "id": 25,
    "user_name": "محمد أحمد",
    "rating": 5,
    "comment": "الكشك مجهز بالكامل والتعامل ممتاز.",
    "created_at_human": "الآن"
  }
}
```

### 4.4 حفظ / إزالة المساحة من المفضلة
`POST /spaces/:id/favorite` *(Auth Required)*

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "is_favorited": true
  }
}
```

---

## 5. الحجوزات والدفع عبر إنستاباي (Bookings & Checkout)
> الصفحات المرتبطة: `SpaceBookingCard`، `CheckoutPage`، `Orders` (`حجوزاتي`)

### 5.1 حساب تكلفة الحجز قبل التأكيد
`POST /bookings/calculate`

**Request Body:**
```json
{
  "space_id": 101,
  "start_date": "2024-11-01",
  "end_date": "2024-11-07"
}
```

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "days": 6,
    "daily_price": 2500,
    "subtotal": 15000,
    "service_fee": 1500,
    "vat_percentage": 14,
    "vat_amount": 2100,
    "total": 18600,
    "currency": "EGP"
  }
}
```

### 5.2 إرسال طلب حجز جديد (التحويل عبر InstaPay)
`POST /bookings` *(Auth Required — `multipart/form-data`)*

**Form Data:**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `space_id` | number | Yes | رقم المساحة |
| `start_date` | string | Yes | تاريخ البدء `YYYY-MM-DD` |
| `end_date` | string | Yes | تاريخ الانتهاء `YYYY-MM-DD` |
| `payment_method` | string | Yes | `instapay` |
| `instapay_sender` | string | Yes | حساب إنستاباي أو رقم الهاتف المُحوّل منه |
| `receipt_image` | file | Yes | صورة إيصال التحويل (`png, jpg, pdf`, max 5MB) |
| `agreed_terms` | boolean | Yes | `true` |
| `subscribe_offers` | boolean | No | الاشتراك في العروض |

**Response (`201 Created`):**
```json
{
  "success": true,
  "message": "تم إرسال طلب الحجز وإيصال التحويل بنجاح، جاري المراجعة",
  "data": {
    "id": 849,
    "code": "SPT-2023-849",
    "status": "pending",
    "total": 18600,
    "receipt_url": "https://cdn.spotly.eg/receipts/849.jpg"
  }
}
```

### 5.3 حجوزات المستخدم الحالي (`حجوزاتي`)
`GET /bookings` *(Auth Required)*

**Query Parameters:**
- `status`: `all | pending | approved | completed | cancelled`
- `search`: البحث برقم الحجز أو اسم المساحة
- `page`: رقم الصفحة

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "counts": {
      "all": 12,
      "pending": 3,
      "approved": 4,
      "completed": 3,
      "cancelled": 2
    },
    "items": [
      {
        "id": 849,
        "code": "SPT-2023-849",
        "status": "pending",
        "space": {
          "id": 101,
          "title": "معرض الأفق التجاري - الزمالك",
          "image": "https://cdn.spotly.eg/spaces/101/main.png"
        },
        "start_date": "2023-10-15",
        "end_date": "2023-10-22",
        "days": 7,
        "date_range_label": "15 أكتوبر 2023 - 22 أكتوبر 2023 (7 أيام)",
        "total": 14500,
        "currency": "EGP",
        "can_cancel": true,
        "can_print_invoice": false,
        "can_review": false
      }
    ],
    "meta": {
      "current_page": 1,
      "last_page": 3,
      "per_page": 4,
      "total": 12
    }
  }
}
```

### 5.4 إلغاء طلب حجز (للحالات قيد المراجعة)
`PATCH /bookings/:id/cancel` *(Auth Required)*

**Response (`200 OK`):**
```json
{
  "success": true,
  "message": "تم إلغاء طلب الحجز بنجاح",
  "data": {
    "id": 849,
    "status": "cancelled"
  }
}
```

### 5.5 فاتورة الحجز (للحجوزات المقبولة)
`GET /bookings/:id/invoice` *(Auth Required)*

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "invoice_number": "INV-2023-812",
    "booking_code": "SPT-2023-812",
    "issued_at": "2023-11-01",
    "client_name": "محمد أحمد",
    "space_title": "قاعة النخبة للمؤتمرات والفعاليات",
    "subtotal": 6800,
    "service_fee": 400,
    "vat_amount": 1000,
    "total": 8200,
    "payment_method": "InstaPay",
    "pdf_url": "https://cdn.spotly.eg/invoices/INV-2023-812.pdf"
  }
}
```

---

## 6. لوحة تحكم الإدارة (Admin Panel)
> الصفحات والمكونات المرتبطة: `AdminPage`، `AdminOverview`، `AdminSpaces`، `AdminBookings`، `AdminUsers`، `AdminSettings`
> *جميع الـ Endpoints التالية تتطلب صلاحية `role === 'admin'`*

### 6.1 إحصائيات النظرة العامة
`GET /admin/overview`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "kpis": {
      "total_revenue": 248500,
      "revenue_growth": "+18.4%",
      "active_bookings": 42,
      "bookings_growth": "+12%",
      "total_spaces": 128,
      "new_spaces_label": "+7 جديدة",
      "pending_instapay_count": 6
    },
    "monthly_revenue": [
      { "month": "يونيو", "amount": 24000 },
      { "month": "يوليو", "amount": 35000 },
      { "month": "أغسطس", "amount": 30000 },
      { "month": "سبتمبر", "amount": 48000 },
      { "month": "أكتوبر", "amount": 62000 },
      { "month": "نوفمبر", "amount": 54000 }
    ],
    "pending_instapay_requests": [
      {
        "id": 849,
        "code": "SPT-2023-849",
        "client_name": "محمود كريم",
        "space_title": "معرض الأفق التجاري - الزمالك",
        "total": 14500,
        "instapay_sender": "mahmoud@instapay",
        "receipt_url": "https://cdn.spotly.eg/receipts/849.jpg"
      }
    ]
  }
}
```

### 6.2 إدارة المساحات (Admin CRUD)
- `GET /admin/spaces` — جلب كل المساحات مع الحالة (`متاح | محجوز | قيد المراجعة`)
- `POST /admin/spaces` — إضافة مساحة جديدة (`multipart/form-data`)
- `PUT /admin/spaces/:id` — تعديل بيانات مساحة
- `DELETE /admin/spaces/:id` — حذف مساحة

**Request (`POST /admin/spaces`):**
```json
{
  "title": "كشك تجاري في سيتي سنتر الإسكندرية",
  "city_id": 3,
  "district_id": 30,
  "type_id": 1,
  "area": 12,
  "height": 3.2,
  "price_per_day": 800,
  "min_booking_days": 3,
  "description": "...",
  "amenities": ["lighting", "ac", "security", "wifi"]
}
```

**Response (`200 OK` / `201 Created`):**
```json
{
  "success": true,
  "message": "تم حفظ المساحة بنجاح",
  "data": {
    "id": 129,
    "title": "كشك تجاري في سيتي سنتر الإسكندرية",
    "status": "available"
  }
}
```

### 6.3 إدارة الحجوزات ومراجعة إيصالات إنستاباي
- `GET /admin/bookings?status=pending&page=1`
- `PATCH /admin/bookings/:id/approve` — تأكيد استلام التحويل واعتماد الحجز
- `PATCH /admin/bookings/:id/reject` — رفض الحجز

**Request (`PATCH /admin/bookings/:id/reject`):**
```json
{
  "reason": "صورة إيصال التحويل غير واضحة"
}
```

**Response (`200 OK`):**
```json
{
  "success": true,
  "message": "تم تحديث حالة الحجز بنجاح",
  "data": {
    "id": 849,
    "status": "approved"
  }
}
```

### 6.4 المستخدمين وملاك المساحات
`GET /admin/users?role=all&page=1`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 5,
        "name": "أحمد محمد",
        "email": "ahmed@spotly.eg",
        "phone": "01012345678",
        "role": "owner",
        "activity_label": "14 مساحة"
      },
      {
        "id": 12,
        "name": "محمود كريم",
        "email": "mahmoud@gmail.com",
        "phone": "01123456789",
        "role": "client",
        "activity_label": "5 حجوزات"
      }
    ],
    "meta": {
      "current_page": 1,
      "last_page": 5,
      "total": 45
    }
  }
}
```

### 6.5 إعدادات المنصة العامة
- `GET /admin/settings`
- `PUT /admin/settings`

**Request Body (`PUT /admin/settings`):**
```json
{
  "platform_name": "Spotly",
  "commission_percentage": 10,
  "instapay_ipa": "spotly@instapay",
  "support_phone": "01000000000"
}
```

**Response (`200 OK`):**
```json
{
  "success": true,
  "message": "تم حفظ الإعدادات بنجاح",
  "data": {
    "platform_name": "Spotly",
    "commission_percentage": 10,
    "instapay_ipa": "spotly@instapay",
    "support_phone": "01000000000"
  }
}
```

