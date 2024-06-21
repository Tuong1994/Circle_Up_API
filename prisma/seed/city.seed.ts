import { City } from '@prisma/client';

const items = [
  {
    nameEn: 'Hà Nội City',
    nameVn: 'Thành phố Hà Nội',
    code: 1,
    divisionTypeEn: 'central_city',
    divisionTypeVn: 'thành phố trung ương',
    codename: 'thanh_pho_ha_noi',
    phone_code: 24,
  },
  {
    nameEn: 'Hà Giang Province',
    nameVn: 'Tỉnh Hà Giang',
    code: 2,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ha_giang',
    phone_code: 219,
  },
  {
    nameEn: 'Cao Bằng Province',
    nameVn: 'Tỉnh Cao Bằng',
    code: 4,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_cao_bang',
    phone_code: 206,
  },
  {
    nameEn: 'Bắc Kạn Province',
    nameVn: 'Tỉnh Bắc Kạn',
    code: 6,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_bac_kan',
    phone_code: 209,
  },
  {
    nameEn: 'Tuyên Quang Province',
    nameVn: 'Tỉnh Tuyên Quang',
    code: 8,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_tuyen_quang',
    phone_code: 207,
  },
  {
    nameEn: 'Lào Cai Province',
    nameVn: 'Tỉnh Lào Cai',
    code: 10,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_lao_cai',
    phone_code: 214,
  },
  {
    nameEn: 'Điện Biên Province',
    nameVn: 'Tỉnh Điện Biên',
    code: 11,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_dien_bien',
    phone_code: 215,
  },
  {
    nameEn: 'Lai Châu Province',
    nameVn: 'Tỉnh Lai Châu',
    code: 12,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_lai_chau',
    phone_code: 213,
  },
  {
    nameEn: 'Sơn La Province',
    nameVn: 'Tỉnh Sơn La',
    code: 14,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_son_la',
    phone_code: 212,
  },
  {
    nameEn: 'Yên Bái Province',
    nameVn: 'Tỉnh Yên Bái',
    code: 15,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_yen_bai',
    phone_code: 216,
  },
  {
    nameEn: 'Hoà Bình Province',
    nameVn: 'Tỉnh Hoà Bình',
    code: 17,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_hoa_binh',
    phone_code: 218,
  },
  {
    nameEn: 'Thái Nguyên Province',
    nameVn: 'Tỉnh Thái Nguyên',
    code: 19,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_thai_nguyen',
    phone_code: 208,
  },
  {
    nameEn: 'Lạng Sơn Province',
    nameVn: 'Tỉnh Lạng Sơn',
    code: 20,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_lang_son',
    phone_code: 205,
  },
  {
    nameEn: 'Quảng Ninh Province',
    nameVn: 'Tỉnh Quảng Ninh',
    code: 22,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_quang_ninh',
    phone_code: 203,
  },
  {
    nameEn: 'Bắc Giang Province',
    nameVn: 'Tỉnh Bắc Giang',
    code: 24,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_bac_giang',
    phone_code: 204,
  },
  {
    nameEn: 'Phú Thọ Province',
    nameVn: 'Tỉnh Phú Thọ',
    code: 25,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_phu_tho',
    phone_code: 210,
  },
  {
    nameEn: 'Vĩnh Phúc Province',
    nameVn: 'Tỉnh Vĩnh Phúc',
    code: 26,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_vinh_phuc',
    phone_code: 211,
  },
  {
    nameEn: 'Bắc Ninh Province',
    nameVn: 'Tỉnh Bắc Ninh',
    code: 27,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_bac_ninh',
    phone_code: 222,
  },
  {
    nameEn: 'Hải Dương Province',
    nameVn: 'Tỉnh Hải Dương',
    code: 30,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_hai_duong',
    phone_code: 220,
  },
  {
    nameEn: 'Hải Phòng City',
    nameVn: 'Thành phố Hải Phòng',
    code: 31,
    divisionTypeEn: 'central_city',
    divisionTypeVn: 'thành phố trung ương',
    codename: 'thanh_pho_hai_phong',
    phone_code: 225,
  },
  {
    nameEn: 'Hưng Yên Province',
    nameVn: 'Tỉnh Hưng Yên',
    code: 33,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_hung_yen',
    phone_code: 221,
  },
  {
    nameEn: 'Thái Bình Province',
    nameVn: 'Tỉnh Thái Bình',
    code: 34,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_thai_binh',
    phone_code: 227,
  },
  {
    nameEn: 'Hà Nam Province',
    nameVn: 'Tỉnh Hà Nam',
    code: 35,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ha_nam',
    phone_code: 226,
  },
  {
    nameEn: 'Nam Định Province',
    nameVn: 'Tỉnh Nam Định',
    code: 36,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_nam_dinh',
    phone_code: 228,
  },
  {
    nameEn: 'Ninh Bình Province',
    nameVn: 'Tỉnh Ninh Bình',
    code: 37,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ninh_binh',
    phone_code: 229,
  },
  {
    nameEn: 'Thanh Hóa Province',
    nameVn: 'Tỉnh Thanh Hóa',
    code: 38,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_thanh_hoa',
    phone_code: 237,
  },
  {
    nameEn: 'Nghệ An Province',
    nameVn: 'Tỉnh Nghệ An',
    code: 40,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_nghe_an',
    phone_code: 238,
  },
  {
    nameEn: 'Hà Tĩnh Province',
    nameVn: 'Tỉnh Hà Tĩnh',
    code: 42,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ha_tinh',
    phone_code: 239,
  },
  {
    nameEn: 'Quảng Bình Province',
    nameVn: 'Tỉnh Quảng Bình',
    code: 44,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_quang_binh',
    phone_code: 232,
  },
  {
    nameEn: 'Quảng Trị Province',
    nameVn: 'Tỉnh Quảng Trị',
    code: 45,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_quang_tri',
    phone_code: 233,
  },
  {
    nameEn: 'Thừa Thiên Province',
    nameVn: 'Tỉnh Thừa Thiên Huế',
    code: 46,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_thua_thien_hue',
    phone_code: 234,
  },
  {
    nameEn: 'Đà Nẵng City',
    nameVn: 'Thành phố Đà Nẵng',
    code: 48,
    divisionTypeEn: 'central_city',
    divisionTypeVn: 'thành phố trung ương',
    codename: 'thanh_pho_da_nang',
    phone_code: 236,
  },
  {
    nameEn: 'Quảng Nam Province',
    nameVn: 'Tỉnh Quảng Nam',
    code: 49,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_quang_nam',
    phone_code: 235,
  },
  {
    nameEn: 'Quảng Ngãi Province',
    nameVn: 'Tỉnh Quảng Ngãi',
    code: 51,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_quang_ngai',
    phone_code: 255,
  },
  {
    nameEn: 'Bình Định Province',
    nameVn: 'Tỉnh Bình Định',
    code: 52,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_binh_dinh',
    phone_code: 256,
  },
  {
    nameEn: 'Phú Yên Province',
    nameVn: 'Tỉnh Phú Yên',
    code: 54,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_phu_yen',
    phone_code: 257,
  },
  {
    nameEn: 'Khánh Hòa Province',
    nameVn: 'Tỉnh Khánh Hòa',
    code: 56,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_khanh_hoa',
    phone_code: 258,
  },
  {
    nameEn: 'Ninh Thuận Province',
    nameVn: 'Tỉnh Ninh Thuận',
    code: 58,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ninh_thuan',
    phone_code: 259,
  },
  {
    nameEn: 'Bình Thuận Province',
    nameVn: 'Tỉnh Bình Thuận',
    code: 60,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_binh_thuan',
    phone_code: 252,
  },
  {
    nameEn: 'Kon Tum Province',
    nameVn: 'Tỉnh Kon Tum',
    code: 62,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_kon_tum',
    phone_code: 260,
  },
  {
    nameEn: 'Gia Lai Province',
    nameVn: 'Tỉnh Gia Lai',
    code: 64,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_gia_lai',
    phone_code: 269,
  },
  {
    nameEn: 'Đắk Lắk Province',
    nameVn: 'Tỉnh Đắk Lắk',
    code: 66,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_dak_lak',
    phone_code: 262,
  },
  {
    nameEn: 'Đắk Nông Province',
    nameVn: 'Tỉnh Đắk Nông',
    code: 67,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_dak_nong',
    phone_code: 261,
  },
  {
    nameEn: 'Lâm Đồng Province',
    nameVn: 'Tỉnh Lâm Đồng',
    code: 68,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_lam_dong',
    phone_code: 263,
  },
  {
    nameEn: 'Bình Phước Province',
    nameVn: 'Tỉnh Bình Phước',
    code: 70,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_binh_phuoc',
    phone_code: 271,
  },
  {
    nameEn: 'Tây Ninh Province',
    nameVn: 'Tỉnh Tây Ninh',
    code: 72,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_tay_ninh',
    phone_code: 276,
  },
  {
    nameEn: 'Bình Dương Province',
    nameVn: 'Tỉnh Bình Dương',
    code: 74,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_binh_duong',
    phone_code: 274,
  },
  {
    nameEn: 'Đồng Nai Province',
    nameVn: 'Tỉnh Đồng Nai',
    code: 75,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_dong_nai',
    phone_code: 251,
  },
  {
    nameEn: 'Bà Rịa Vũng Tàu Province',
    nameVn: 'Tỉnh Bà Rịa - Vũng Tàu',
    code: 77,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ba_ria_vung_tau',
    phone_code: 254,
  },
  {
    nameEn: 'Hồ Chí Minh City',
    nameVn: 'Thành phố Hồ Chí Minh',
    code: 79,
    divisionTypeEn: 'central_city',
    divisionTypeVn: 'thành phố trung ương',
    codename: 'thanh_pho_ho_chi_minh',
    phone_code: 28,
  },
  {
    nameEn: 'Long An Province',
    nameVn: 'Tỉnh Long An',
    code: 80,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_long_an',
    phone_code: 272,
  },
  {
    nameEn: 'Tiền Giang Province',
    nameVn: 'Tỉnh Tiền Giang',
    code: 82,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_tien_giang',
    phone_code: 273,
  },
  {
    nameEn: 'Bến Tre Province',
    nameVn: 'Tỉnh Bến Tre',
    code: 83,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ben_tre',
    phone_code: 275,
  },
  {
    nameEn: 'Trà Vinh Province',
    nameVn: 'Tỉnh Trà Vinh',
    code: 84,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_tra_vinh',
    phone_code: 294,
  },
  {
    nameEn: 'Vĩnh Long Province',
    nameVn: 'Tỉnh Vĩnh Long',
    code: 86,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_vinh_long',
    phone_code: 270,
  },
  {
    nameEn: 'Đồng Tháp Province',
    nameVn: 'Tỉnh Đồng Tháp',
    code: 87,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_dong_thap',
    phone_code: 277,
  },
  {
    nameEn: 'An Giang Province',
    nameVn: 'Tỉnh An Giang',
    code: 89,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_an_giang',
    phone_code: 296,
  },
  {
    nameEn: 'Kiên Giang Province',
    nameVn: 'Tỉnh Kiên Giang',
    code: 91,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_kien_giang',
    phone_code: 297,
  },
  {
    nameEn: 'Cần Thơ City',
    nameVn: 'Thành phố Cần Thơ',
    code: 92,
    divisionTypeEn: 'central_city',
    divisionTypeVn: 'thành phố trung ương',
    codename: 'thanh_pho_can_tho',
    phone_code: 292,
  },
  {
    nameEn: 'Hậu Giang Province',
    nameVn: 'Tỉnh Hậu Giang',
    code: 93,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_hau_giang',
    phone_code: 293,
  },
  {
    nameEn: 'Sóc Trăng Province',
    nameVn: 'Tỉnh Sóc Trăng',
    code: 94,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_soc_trang',
    phone_code: 299,
  },
  {
    nameEn: 'Bạc Liêu Province',
    nameVn: 'Tỉnh Bạc Liêu',
    code: 95,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_bac_lieu',
    phone_code: 291,
  },
  {
    nameEn: 'Cà Mau Province',
    nameVn: 'Tỉnh Cà Mau',
    code: 96,
    divisionTypeEn: 'province',
    divisionTypeVn: 'tỉnh',
    codename: 'tinh_ca_mau',
    phone_code: 290,
  },
];

const covertItems = [...items].map(({ nameEn, nameVn, code }) => ({ nameEn, nameVn, code }));

const cities: City[] = [...covertItems].map((item, idx) => ({
  id: `CITY_${idx}`,
  nameEn: item.nameEn,
  nameVn: item.nameVn,
  code: item.code,
  isDelete: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

export default cities;