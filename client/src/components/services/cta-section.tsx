import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const CTASection = ({ 
  title, 
  description, 
  buttonText = "Contact Us", 
  onClick = () => window.location.href = '#contact'
}: CTASectionProps) => {
  return (
    <section className="py-16 mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjE1MyAwIDIuMTIzLjQgMi45NDcgMS4yLjgyMy44IDEuMjM0IDEuNzY3IDEuMjM0IDIuOSAwIDEuMTMzLS40MSAyLjEtMS4yMzQgMi45LS44MjQuOC0xLjc5NCAxLjItMi45NDcgMS4yaC0xMmMtMS4xNTMgMC0yLjEyMy0uNC0yLjk0Ny0xLjItLjgyMy0uOC0xLjIzNC0xLjc2Ny0xLjIzNC0yLjkgMC0xLjEzMy40MTEtMi4xIDEuMjM0LTIuOS44MjQtLjggMS43OTQtMS4yIDIuOTQ3LTEuMmgxMnoiLz48cGF0aCBkPSJNNTcuODAzIDYuNDI4YzEuOTk1LjAwMiAzLjYwNiAxLjYxMyAzLjYwOCAzLjYwOCAwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4aC0zLjYxYy0xLjk5NS0uMDAyLTMuNjA2LTEuNjEzLTMuNjA4LTMuNjA4IDAtMS45OTUgMS42MTMtMy42MDggMy42MDgtMy42MDhoMy42MXoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-orbitron font-bold mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-foreground/70">{description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;