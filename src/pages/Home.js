import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaPray, FaCalendarAlt, FaQuestionCircle, FaMap, FaGraduationCap } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl text-primary-600" />,
      title: 'الكتاب المقدس',
      description: 'اقرأ الكتاب المقدس باللغة العربية مع إمكانية البحث والتصفية',
      path: '/bible',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <FaPray className="text-4xl text-green-600" />,
      title: 'الصلوات',
      description: 'مجموعة من الصلوات والتأملات مرتبة حسب الموضوع',
      path: '/prayers',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-purple-600" />,
      title: 'السنكسار',
      description: 'قراءات وأحداث اليوم حسب التقويم القبطي',
      path: '/synaxarium',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-orange-600" />,
      title: 'المسابقات',
      description: 'اختبارات معرفية لتعزيز فهم الكتاب المقدس',
      path: '/quizzes',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: <FaMap className="text-4xl text-red-600" />,
      title: 'الخرائط',
      description: 'خرائط تفاعلية توضح المواقع والأحداث التاريخية',
      path: '/maps',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      title: 'طرق الدراسة',
      description: 'أساليب مختلفة لدراسة الكتاب المقدس',
      path: '/study-methods',
      color: 'bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          نور الكلمة
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          منصة شاملة لدراسة الكتاب المقدس باللغة العربية. اكتشف النصوص المقدسة، 
          تعلم من القديسين، واعمق فهمك للإيمان المسيحي.
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
          <Link
            to="/bible"
            className="btn-primary text-lg px-8 py-3"
          >
            ابدأ القراءة
          </Link>
          <Link
            to="/register"
            className="btn-secondary text-lg px-8 py-3"
          >
            إنشاء حساب
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`card ${feature.color} hover:shadow-lg transition-shadow duration-300`}
          >
            <Link to={feature.path} className="block">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          عن نور الكلمة
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              رؤيتنا
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نسعى لتوفير منصة شاملة ومتاحة للجميع لدراسة الكتاب المقدس باللغة العربية، 
              مع التركيز على التقليد القبطي الأرثوذكسي وتقديم أدوات تفاعلية لتعميق الفهم الروحي.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ميزاتنا
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• نصوص الكتاب المقدس باللغة العربية</li>
              <li>• السنكسار اليومي مع سير القديسين</li>
              <li>• خرائط تفاعلية للأحداث التاريخية</li>
              <li>• مسابقات تعليمية تفاعلية</li>
              <li>• طرق دراسة متنوعة</li>
              <li>• مجموعة شاملة من الصلوات</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 