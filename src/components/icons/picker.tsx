import React, { Suspense, useState } from 'react'
import { outlineIcons24, solidIcons24 } from './picker.icons'
import { IconObj, PickerProps } from './picker.types'

const Icon = (
  iconName: keyof typeof outlineIcons24,
  size: number | string,
  isSolid: boolean,
  style?: React.CSSProperties,
  className?: string
) => {
  const icons = isSolid ? solidIcons24 : outlineIcons24;
  const Icon = icons[iconName]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Icon
        height={size}
        width={size}
        style={style}
        className={className}
      />
    </Suspense>
  )
}

const Picker: React.FC<PickerProps> = ({ setValue, iconDefaultStyle, iconClassName }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSolid, setIsSolid] = useState<boolean>(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;
    const tooltipText = target.dataset.tooltip;

    if (tooltipText) {
      target.setAttribute('title', tooltipText);
    }
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget;
    target.removeAttribute('title');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleRadioChange = () => {
    setIsSolid((prevIsSolid) => !prevIsSolid);
  };

  const handleIconClick = (iconName: keyof typeof outlineIcons24) => {
    const icon: IconObj = {
      name: iconName,
      type: isSolid ? 'solid' : 'outline',
      size: '24',
    };
    setValue(icon);
  }

  const filteredIcons = Object.keys(isSolid ? solidIcons24 : outlineIcons24).filter(
    (name) => name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '500px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '8px', gap: '8px' }}>
        <input
          type="text"
          placeholder="Search icons"
          value={searchText}
          onChange={handleSearchChange}
        />
        <div>
          <label style={{whiteSpace: "nowrap"}}>
            <input type="radio" value="outline" checked={!isSolid} onChange={handleRadioChange} />
            Outline
          </label>
          <label style={{whiteSpace: "nowrap"}}>
            <input type="radio" value="solid" checked={isSolid} onChange={handleRadioChange} />
            Solid
          </label>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'groove gray',
        height: '100%',
        maxWidth: '560px',
        overflowY: 'auto'
      }}>
        {filteredIcons.map((name) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 8,
              width: '40px',
              cursor: 'pointer',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data-tooltip={name}
            onClick={() => handleIconClick(name as keyof typeof outlineIcons24)}
          >
            {Icon(
              name as keyof typeof outlineIcons24,
              "100%",
              isSolid,
              iconDefaultStyle,
              iconClassName
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picker
