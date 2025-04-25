import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParticles } from '@/hooks/use-particles';

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ServiceLayout = ({ children, title, subtitle }: ServiceLayoutProps) => {
  // Use the same particles hook as the home page for consistent interactions
  const { particlesInit, particlesLoaded } = useParticles();

  return (
    <div className="flex flex-col">
      {/* Page Header - with particles for mouse interaction */}
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 py-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Particles Background - using the same ID as home page for consistent effects */}
        <div 
          id="hero-particles" 
          className="absolute inset-0 z-0"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjE1MyAwIDIuMTIzLjQgMi45NDcgMS4yLjgyMy44IDEuMjM0IDEuNzY3IDEuMjM0IDIuOSAwIDEuMTMzLS40MSAyLjEtMS4yMzQgMi45LS44MjQuOC0xLjc5NCAxLjItMi45NDcgMS4yaC0xMmMtMS4xNTMgMC0yLjEyMy0uNC0yLjk0Ny0xLjItLjgyMy0uOC0xLjIzNC0xLjc2Ny0xLjIzNC0yLjkgMC0xLjEzMy40MTEtMi4xIDEuMjM0LTIuOS44MjQtLjggMS43OTQtMS4yIDIuOTQ3LTEuMmgxMnoiLz48cGF0aCBkPSJNNTcuODAzIDYuNDI4YzEuOTk1LjAwMiAzLjYwNiAxLjYxMyAzLjYwOCAzLjYwOCAwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4aC0zLjYxYy0xLjk5NS0uMDAyLTMuNjA2LTEuNjEzLTMuNjA4LTMuNjA4IDAtMS45OTUgMS42MTMtMy42MDggMy42MDgtMy42MDhoMy42MXoiLz48cGF0aCBkPSJNMzkuMDYzIDU3LjgwM2MwLTEuOTk2IDEuNjEzLTMuNjA3IDMuNjA4LTMuNjA3IDEuOTk1IDAgMy42MDggMS42MTMgMy42MDggMy42MDd2My42MWMwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4LTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDh2LTMuNjF6TTU3LjgwMyAyMS4zOTJjMS45OTUgMCAzLjYwOCAxLjYxMyAzLjYwOCAzLjYwOHMtMS42MTMgMy42MDgtMy42MDggMy42MDhoLTMuNjFjLTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDhzMS42MTMtMy42MDggMy42MDgtMy42MDhoMy42MXpNNTcuODAzIDM5LjA2M2MxLjk5NSAwIDMuNjA4IDEuNjEzIDMuNjA4IDMuNjA4IDAgMS45OTUtMS42MTMgMy42MDctMy42MDggMy42MDdoLTMuNjFjLTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDcgMC0xLjk5NSAxLjYxMy0zLjYwOCAzLjYwOC0zLjYwOGgzLjYxek0yMS4zOTIgNTcuODAzYzAtMS45OTQgMS42MTMtMy42MDcgMy42MDgtMy42MDdzMy42MDggMS42MTMgMy42MDggMy42MDd2My42MWMwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4cy0zLjYwOC0xLjYxMy0zLjYwOC0zLjYwOHYtMy42MXoiLz48cGF0aCBkPSJNNjEuNDAzIDYuNDI4YzEuNzA4LjA2IDMuMDcgMS40NSAzLjA3IDMuMTggMCAxLjczMi0xLjM2MiAzLjEyLTMuMDcgMy4xOEwuNjAzIDEyLjc5Yy0xLjcwOS0uMDYtMy4wNy0xLjQ1LTMuMDctMy4xOCAwLTEuNzMgMS4zNjEtMy4xMiAzLjA3LTMuMThsNjAuOC4wMDR6TTMuMzMgNTcuOGMtMS44MzYgMC0zLjMzLTEuNDQ1LTMuMzMtMy4yMjUgMC0xLjc4IDEuNDk0LTMuMjI1IDMuMzMtMy4yMjVoNTMuMzRjMS44MzYgMCAzLjMzIDEuNDQ2IDMuMzMgMy4yMjUgMCAxLjc4LTEuNDk0IDMuMjI1LTMuMzMgMy4yMjVIMy4zM3pNMTIuNzg5IDQ2LjI1NmMtLjA2LTIuMjM1IDEuNjktNC4wODIgMy45MjUtNC4xNDJzNC4wODMgMS42OSA0LjE0MyAzLjkyNWwuNjE4IDIzLjM0N2MuMDYgMi4yMzYtMS42OSA0LjA4My0zLjkyNSA0LjE0My0yLjIzNS4wNi00LjA4My0xLjY5LTQuMTQzLTMuOTI1bC0uNjE4LTIzLjM0N3pNMS41NyAxMi43ODhjLjA2LTIuMjM1IDEuOTA5LTMuOTg1IDQuMTQ0LTMuOTI1IDIuMjM1LjA2IDMuOTg1IDEuOTA4IDMuOTI1IDQuMTQzbC0uNjE3IDIzLjM0OGMtLjA2IDIuMjM1LTEuOTA5IDMuOTg1LTQuMTQzIDMuOTI1LTIuMjM2LS4wNi0zLjk4NS0xLjkwOC0zLjkyNi00LjE0M2wuNjE3LTIzLjM0OHpNNDYuMjU3IDQ3LjIxMWMtMi4yMzYtLjA2LTMuOTg2LTEuOTA5LTMuOTI2LTQuMTQ0LjA2LTIuMjM1IDEuOTA5LTMuOTg1IDQuMTQ0LTMuOTI1bDEyLjkzNC4zNDRjMi4yMzUuMDYgMy45ODUgMS45MDkgMy45MjUgNC4xNDQtLjA2IDIuMjM1LTEuOTA4IDMuOTg1LTQuMTQzIDMuOTI1bC0xMi45MzQtLjM0NHoiLz48cGF0aCBkPSJNNDYuMjU3IDIyLjQ1OWMyLjIzNiAwIDQuMDUyLTEuODU0IDQuMDUyLTQuMTQgMC0yLjI4NS0xLjgxNi00LjE0LTQuMDUyLTQuMTRIMy4wODJDLjg0NiAxNC4xOCAwIDE2LjAzNSAwIDE4LjM5YzAgMi4yODYgMS44NDYgNC4xNCA0LjA4MiA0LjE0aDQyLjE3NXoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl max-w-3xl mx-auto opacity-90">{subtitle}</p>}
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ServiceLayout;