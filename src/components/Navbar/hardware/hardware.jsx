import './hardware.css'

export default function Hardware (){
    const hardwareItem = [
        {
            hardware_img: "ram_ssd.jpg",
            hardware_name: "RAM & SSD"
        },
        {
            hardware_img: "laptopScreen.jpg",
            hardware_name: "Laptop Screen"
        },
        {
            hardware_img: "keyboard_mouse.jpg",
            hardware_name: "Keyboard & Mouse"
        },
        {
            hardware_img: "printer_cartridge.jpg",
            hardware_name: "Printer & Cartridges"
        },
        {
            hardware_img: "adapter.jpg",
            hardware_name: "Cable & Adapters"
        },
        {
            hardware_img: "IT_accessories.png",
            hardware_name: "Other IT Accessories"
        },
    ]
    return (
        <section className="hardware-section" id="hardware">
            <h2>Hardware Products</h2>
        <div className="hardware-container">
            <div className="hardware-product-grid">
            {hardwareItem.map((hardware, index) => (
                <div className="hardware-product-card" key={index}>
                <div className="hardware-product-img">
                    <img src={hardware.hardware_img} alt={hardware.hardware_name} />
                </div>

                <div className="hardware-product-content">
                    <h4>{hardware.hardware_name}</h4>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}