import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/solutions/netex-cloud" className="text-sm text-muted-foreground hover:text-foreground">
                  Netex Cloud
                </a>
              </li>
              <li>
                <a href="/solutions/netex-studio" className="text-sm text-muted-foreground hover:text-foreground">
                  Netex Studio
                </a>
              </li>
              <li>
                <a href="/solutions/virtual-college" className="text-sm text-muted-foreground hover:text-foreground">
                  Virtual College
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/webinars" className="text-sm text-muted-foreground hover:text-foreground">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Netex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

