'use strict';

const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Partais", [{
      nama_partai: "PARTAI KEBANGKITAN BANGSA",
      nomor_urut: 1,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170612/partai/Logo_PKB_yaxlsn.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      nama_partai: "PARTAI GERAKAN INDONESIA RAYA",
      nomor_urut: 2,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170612/partai/Logo_Gerindra_k0rvy4.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI DEMOKRASI INDONESIA PERJUANGAN",
      nomor_urut: 3,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170610/partai/Logo_PDIP_2019v2_c29vpe.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI GOLONGAN KARYA",
      nomor_urut: 4,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170611/partai/Logo_Golkar_2019v2_oewdbe.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI NASDEM",
      nomor_urut: 5,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170609/partai/Logo_Nasdem_2019v3_djpjhj.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI GERAKAN PERUBAHAN INDONESIA",
      nomor_urut: 6,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170610/partai/Logo_Garuda_2019v2_ctwmt6.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI BERKARYA",
      nomor_urut: 7,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170611/partai/Logo_Berkarya_2019v2_trarjt.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI KEADILAN SEJAHTERA",
      nomor_urut: 8,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170612/partai/Logo_PKS_2019_rzyhmg.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI PERSATUAN INDONESIA",
      nomor_urut: 9,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170611/partai/Logo_Perindo_2019v2_ohex3x.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI PERSATUAN PEMBANGUNAN",
      nomor_urut: 10,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170611/partai/Logo_PPP_2019v2_swjhsk.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI SOLIDARITAS INDONESIA",
      nomor_urut: 11,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170614/partai/Logo_PSI_2019_bnywtk.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI AMANAT NASIONAL",
      nomor_urut: 12,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170613/partai/Logo_PAN_2019_imiegx.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI HATI NURANI RAKYAT",
      nomor_urut: 13,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170609/partai/Logo_Hanura_2019v2_zy6vhz.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI DEMOKRAT",
      nomor_urut: 14,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170609/partai/Logo_Demokrat_2019v2_qjdsgx.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI BULAN BINTANG",
      nomor_urut: 19,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170609/partai/Logo_PBB_2019_nrobfu.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_partai: "PARTAI KEADILAN DAN PERSATUAN INDONESIA",
      nomor_urut: 20,
      logo: "https://res.cloudinary.com/andi-test/image/upload/v1637170617/partai/Logo_PKPI_2019_pi0vse.jpg",
      visi_misi: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Partais", null, {});
  }
};
