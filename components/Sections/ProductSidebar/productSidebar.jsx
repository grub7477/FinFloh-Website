import styles from "./productSidebar.module.scss";
import Link from "next/link";
import { info_map } from "../ProductSection/productSection.data.js";


const ProductSidebar = () => {

    return(
      <aside className="blog-products-sidebar" aria-label="FinFloh products">
        <div className="blog-products-sidebar-card">
          <header className="blog-products-sidebar-header">
            <h4>
              Explore the FinFloh <br/> order-to-cash platform
            </h4>
          </header>
          <nav className="blog-products-sidebar-nav" aria-label="Product pages">
          <div>
            <Link href="/flohsense-ai-agent">
              <a className="blog-products-sidebar-link blog-products-sidebar-highlight">
              <img className="icon--lg blog-products-sidebar-chevron" src="/images/fAI.svg" />
                <span className="blog-products-sidebar-link-text">FlohSense AI</span>
                <span className="blog-products-sidebar-badge">New</span>
                <span className="blog-products-sidebar-chevron--white" aria-hidden="true">
                  ›
                </span>
              </a>
            </Link>
          </div>
          {Object.entries(info_map).map(([key, index]) => (
                <Link key={key} href={index.url}>
                  <a className="blog-products-sidebar-link">
                    <img className="icon--lg blog-products-sidebar-chevron" src={index.icon} />
                    <span className="blog-products-sidebar-link-text">
                      {index.title}
                    </span>
                    <span className="blog-products-sidebar-chevron" aria-hidden="true">
                      ›
                    </span>
                  </a>
                </Link>
          ))}
         
          </nav>
          
        </div>
      </aside>)
    ;}

    export default ProductSidebar;