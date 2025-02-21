const ScrollSign = () => {
  return (
    <div className="mouse_scroll pointer-events-none" role='presentation'>

      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows first"></span>
        <span className="m_scroll_arrows second"></span>
        <span className="m_scroll_arrows third"></span>
      </div>
    </div>
  )
}

export default ScrollSign;
