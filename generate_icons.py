import zlib
import struct
import math

def create_png(width, height, filename):
    # Gera imagem azul gradiente com um desenho simples de livro branco
    raw_rows = []
    
    # Cores
    c1 = (79, 70, 229, 255)   # #4f46e5 Indigo
    c2 = (6, 182, 212, 255)   # #06b6d4 Cyan
    white = (255, 255, 255, 255)
    gold = (251, 191, 36, 255)
    
    corner_radius = int(width * 0.22)
    
    for y in range(height):
        row = bytearray([0]) # Filter byte: 0 (None)
        t_y = y / height
        for x in range(width):
            t_x = x / width
            
            # Checa cantos arredondados
            in_rect = True
            dx = min(x, width - 1 - x)
            dy = min(y, height - 1 - y)
            if dx < corner_radius and dy < corner_radius:
                dist = math.sqrt((corner_radius - dx)**2 + (corner_radius - dy)**2)
                if dist > corner_radius:
                    in_rect = False
            
            if not in_rect:
                row.extend([0, 0, 0, 0])
                continue
                
            # Interpolação gradiente
            factor = (t_x + t_y) / 2.0
            r = int(c1[0] * (1 - factor) + c2[0] * factor)
            g = int(c1[1] * (1 - factor) + c2[1] * factor)
            b = int(c1[2] * (1 - factor) + c2[2] * factor)
            a = 255
            
            # Desenha ícone de livro estilizado no centro
            cx, cy = x / width, y / height
            # Livro: região cx entre 0.25 e 0.75, cy entre 0.30 e 0.70
            if 0.28 <= cx <= 0.72 and 0.32 <= cy <= 0.68:
                # Centro (lombada)
                if abs(cx - 0.50) < 0.02 and cy <= 0.58:
                    # Marcador amarelo
                    r, g, b = gold[:3]
                elif abs(cx - 0.50) < 0.01:
                    # Divisão central
                    r, g, b = (200, 210, 230)
                elif 0.30 <= cx <= 0.48 or 0.52 <= cx <= 0.70:
                    # Páginas brancas
                    r, g, b = (255, 255, 255)
                    
            row.extend([r, g, b, a])
        raw_rows.append(bytes(row))
        
    raw_data = b"".join(raw_rows)
    compressed = zlib.compress(raw_data, 9)
    
    png = bytearray(b"\x89PNG\r\n\x1a\n")
    
    # IHDR
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    png.extend(struct.pack(">I", len(ihdr)))
    png.extend(b"IHDR")
    png.extend(ihdr)
    png.extend(struct.pack(">I", zlib.crc32(b"IHDR" + ihdr) & 0xffffffff))
    
    # IDAT
    png.extend(struct.pack(">I", len(compressed)))
    png.extend(b"IDAT")
    png.extend(compressed)
    png.extend(struct.pack(">I", zlib.crc32(b"IDAT" + compressed) & 0xffffffff))
    
    # IEND
    png.extend(struct.pack(">I", 0))
    png.extend(b"IEND")
    png.extend(struct.pack(">I", zlib.crc32(b"IEND") & 0xffffffff))
    
    with open(filename, "wb") as f:
        f.write(png)
    print(f"Generated {filename}")

if __name__ == "__main__":
    create_png(192, 192, "static/icon-192.png")
    create_png(512, 512, "static/icon-512.png")
