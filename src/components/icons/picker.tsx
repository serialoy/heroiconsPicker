import React, { Suspense, useState } from 'react'
import { outlineIcons24, solidIcons24 } from './picker.icons'
import { PickerProps } from './picker.types'

const Icon = (iconName: keyof typeof outlineIcons24, size: number | string, isSolid: boolean) => {
  const icons = isSolid ? solidIcons24 : outlineIcons24;
  const Icon = icons[iconName]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Icon height={size} width={size} />
    </Suspense>
  )
}

const Picker: React.FC<PickerProps> = () => {
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

  const filteredIcons = Object.keys(isSolid ? solidIcons24 : outlineIcons24).filter(
    (name) => name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{overflow: 'hidden', maxHeight: '100%'}}>
      <input
        type="text"
        placeholder="Search icons"
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginBottom: '8px' }}
      />
      <div>
        <label>
          <input type="radio" value="outline" checked={!isSolid} onChange={handleRadioChange} />
          Outline
        </label>
        <label>
          <input type="radio" value="solid" checked={isSolid} onChange={handleRadioChange} />
          Solid
        </label>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', border: 'groove gray', maxHeight: '500x', maxWidth: '560px', overflowY: 'auto' }}>
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
          >
            {Icon(name as keyof typeof outlineIcons24, "100%", isSolid)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picker