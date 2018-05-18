import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'th'
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          menu: {
            title: 'Final Exam',
            manageEmp: 'Manage Employee',
            searchEmp: 'Search Employee',
            addEmp: 'Add Employee',
            language: 'Language',
            thai: 'ไทย',
            english: 'English',
          },
          searchEmp: {
            title: 'Search Employee',
          },
          addEmp: {
            title: 'Add Employee',
          },
          searchEmpCritieria: {
            title: 'Critieria',
          },
          formManageUser: {
            employeeNo: 'Employee No.',
            employeeName: 'Employee Name',
            employeeSurename: 'Employee Surename',
            department: {
              title: 'Department',
              IT: 'IT',
              HR: 'HR',
              Marketing: 'Marketing',
              AllDepartment: 'All Department',
            },
            salary: 'Saraly',
          },
        },
      },
      th: {
        translation: {
          menu: {
            title: 'ทดสอบครั้งสุดท้ายนะจ๊ะ',
            manageEmp: 'จัดการพนักงาน',
            searchEmp: 'ค้นหาพนักงาน',
            addEmp: 'เพิ่มพนักงาน',
            language: 'Language',
            thai: 'ไทย',
            english: 'English',
          },
          searchEmp: {
            title: 'ค้นหาพนักงาน',
          },
          addEmp: {
            title: 'เพิ่มพนักงาน',
          },
          searchEmpCritieria: {
            title: 'ค้นหาข้อมูลพนักงาน',
          },
          formManageUser: {
            employeeNo: 'รหัสพนักงาน',
            employeeName: 'ชื่อ',
            employeeSurename: 'นามสกุล',
            department: {
              title: 'แผนก',
              IT: 'ไอที',
              HR: 'จัดการทรัพยากรณ์มนุษย์',
              Marketing: 'การตลาด',
              AllDepartment: 'เลือกทุกแผนก',
            },
            salary: 'เงินเดือน',
          },
        },
      },
    },
  })

export default i18next