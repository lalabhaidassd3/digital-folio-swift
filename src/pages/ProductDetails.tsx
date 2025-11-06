import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ArrowLeft, Download, Shield, Star } from "lucide-react";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";

const imageMap: Record<string, string> = {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={imageMap[product.image]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground">
                  {product.category}
                </Badge>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="text-muted-foreground ml-2">(4.9/5 - 248 reviews)</span>
              </div>

              <div className="text-4xl font-bold text-primary mb-8">
                ${product.price}
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Download className="h-5 w-5 text-primary" />
                  <span>Instant download after purchase</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Lifetime access to updates</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => navigate(`/checkout/${product.id}`)}
                >
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Preview
                </Button>
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">What's Included:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PDF format (optimized for all devices)</li>
                  <li>• Printable version included</li>
                  <li>• Bonus templates and worksheets</li>
                  <li>• Free updates for life</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
