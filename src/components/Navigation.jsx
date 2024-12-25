import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { routesConfig, getMainRoutes, getFooterRoutes } from "./routesConfig";

const Navigation = () => {
  const handleNavigate = (route) => {
    window.open(`${window.location.origin}${route}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const renderRouteItem = (route) => {
    const IconComponent = Icons[route.icon];

    return (
      <motion.div
        key={route.route}
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <IconComponent className="w-5 h-5 text-indigo-400" />
              </div>
            )}
            <div>
              <h3 className="text-white font-medium">{route.title}</h3>
              <p className="text-gray-400 text-sm">{route.route}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate(route.route)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm font-medium transition-colors duration-200"
          >
            Open
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Nessa Navigation
          </h1>
          <p className="text-indigo-200">Explore all available routes</p>
        </motion.div>

        {/* Main Routes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12"
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Main Navigation
          </h2>
          {getMainRoutes().map(renderRouteItem)}
        </motion.div>

        {/* Footer Routes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Footer Links
          </h2>
          {getFooterRoutes().map(renderRouteItem)}
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;