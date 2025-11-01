
export default function FileMenu(){
  return (<>

<div className="dropdown" id="file_toggle" style=" width: 275px;height: 310px;left: 0;">
  <table className="toggle-content" style="width: 275px;height: 305px;left: 0; ">
    <tr className="menu-row" id="New_file">
      <td className="tickspace"></td>
      <td className="menu-item-label">New</td>
      <td className="menu-item-shortcut">Ctrl+Alt+N</td>
      <td className="  secondary-dialog-arrow"></td>
    </tr>
    <tr className="menu-row" id="Open_file">
      <td className="tickspace"></td>
      <td className="menu-item-label">Open</td>
      <td className="menu-item-shortcut">Ctrl+Alt+O</td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <tr className="menu-row" id="Save_file">
      <td className="tickspace"></td>
      <td className="menu-item-label">Save</td>
      <td className="menu-item-shortcut"></td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <tr className="menu-row" id="Saveas_file">
      <td className="tickspace"></td>
      <td className="menu-item-label">SaveAs</td>
      <td className="menu-item-shortcut">Ctrl+S</td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <tr className="div-line">
      <td colspan="4">
        <hr className="menuhr">
      </td>
    </tr>
    <tr className="menu-row" id="Load_from_URL" hx-get="/loadBox" hx-trigger="click" hx-target="#load_box"
      hx-swap="outerHTML">
      <td className="tickspace"></td>
      <td className="menu-item-label">Load from URL</td>
      <td className="menu-item-shortcut"></td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <tr className="menu-row" id="Upload_to_Imgur">
      <td className="tickspace"></td>
      <td className="menu-item-label">Upload to Imgur</td>
      <td className="menu-item-shortcut"></td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <tr className="div-line">
      <td colspan="4">
        <hr className="menuhr">
      </td>
    </tr>
    <tr className="menu-row" id="Manage_storage">
      <td className="tickspace"></td>
      <td className="menu-item-label">Manage storage</td>
      <td className="menu-item-shortcut"></td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
    <!-- <tr className="div-line">
        <td colspan="4">
          <hr className="menuhr">
        </td>
      </tr> -->
    <!-- <tr className="menu-row" id="Set_as_WallpaperT">
        <td className="tickspace"></td>
        <td className="menu-item-label">Set as wallpaper(Tiled)</td>
        <td className="menu-item-shortcut"></td>
        <td className="secondary-dialog-arrow"></td>
      </tr>
      <tr className="menu-row" id="Set_as_WallpaperC">
        <td className="tickspace"></td>
        <td className="menu-item-label">Set as Wallpaper(Centered)</td>
        <td className="menu-item-shortcut"></td>
        <td className="secondary-dialog-arrow"></td>
      </tr> -->
    <!-- <tr className="div-line">
        <td colspan="4">
          <hr className="menuhr">
        </td>
      </tr> -->
    <tr className="menu-row" id="Recent_files">
      <td className="tickspace"></td>
      <td className="menu-item-label" style="text-shadow: 1px 1px 0px rgb(255, 255, 255);">Recent Files</td>
      <td className="menu-item-shortcut"></td>
      <td className="secondary-dialog-arrow"></td>
    <tr className="div-line">
      <td colspan="4">
        <hr className="menuhr">
      </td>
    </tr>
    <tr className="menu-row" id="Exit">
      <td className="tickspace"></td>
      <td className="menu-item-label">Exit</td>
      <td className="menu-item-shortcut">Ctrl+Q</td>
      <td className="secondary-dialog-arrow"></td>
    </tr>
  </table>
</div>

  </>);
}
