const ADMIN_USERS = [
  {
    id: 1,
    initials: 'أ م',
    name: 'أحمد محمد',
    email: 'ahmed@spotly.eg',
    phone: '01012345678',
    role: 'مالك مساحة',
    roleClass: 'bg-primary-100 text-primary',
    count: '14 مساحة',
  },
  {
    id: 2,
    initials: 'م ك',
    name: 'محمود كريم',
    email: 'mahmoud@gmail.com',
    phone: '01123456789',
    role: 'عميل',
    roleClass: 'bg-secondary-100 text-secondary-700',
    count: '5 حجوزات',
  },
  {
    id: 3,
    initials: 'س هـ',
    name: 'سارة هاشم',
    email: 'sara@brand.eg',
    phone: '01234567890',
    role: 'عميل',
    roleClass: 'bg-secondary-100 text-secondary-700',
    count: '3 حجوزات',
  },
  {
    id: 4,
    initials: 'خ ط',
    name: 'خالد طارق',
    email: 'khaled@malls.eg',
    phone: '01555555555',
    role: 'مالك مساحة',
    roleClass: 'bg-primary-100 text-primary',
    count: '8 مساحات',
  },
]

export default function AdminUsers() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-xs overflow-hidden">
      <div className="p-5 border-b border-neutral-100">
        <h2 className="text-base sm:text-lg font-extrabold text-neutral">
          المستخدمين وملاك المساحات
        </h2>
        <p className="text-xs font-medium text-neutral-500">
          قائمة العملاء وملاك المساحات المسجلين في المنصة
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs sm:text-sm">
          <thead className="bg-neutral-50 text-neutral-500 font-bold border-b border-neutral-100">
            <tr>
              <th className="py-3.5 px-5">المستخدم</th>
              <th className="py-3.5 px-4">البريد الإلكتروني</th>
              <th className="py-3.5 px-4">رقم الهاتف</th>
              <th className="py-3.5 px-4">الدور</th>
              <th className="py-3.5 px-4">النشاط</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {ADMIN_USERS.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-neutral-50/70 transition-colors"
              >
                <td className="py-3.5 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-100 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">
                      {user.initials}
                    </div>
                    <span className="font-extrabold text-neutral">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-medium text-neutral-600" dir="ltr">
                  {user.email}
                </td>
                <td className="py-3.5 px-4 font-medium text-neutral-600" dir="ltr">
                  {user.phone}
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${user.roleClass}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-neutral">
                  {user.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

