---
title: Neo SPCC
description: R&D team developing an open-source truly decentralized cloud platform and supporting the [Neo](https://neo.org/) core
date: 2022-12-06T16:32:57+03:00
draft: false
---

{{< persons "Team" >}}
  {{< person "2" "/images/team/sergey_lyubich.webp" "Sergei Liubich" "Chief Executive Officer" >}}
    <ul>
      <li>PhD Candidate in Reliability of Distributed Computer Systems (ITMO University)</li>
      <li>M.Sc. in Computer &amp; Electrical Engineering (Seoul National University)</li>
      <li>M.Sc. in Applied Mathematics &amp; Informatics (St. Petersburg State University)</li>
      <li>Former research engineer at Samsung Electronics (Seoul R&amp;D Center)</li>
    </ul>
  {{< /person >}}
  {{< person "3" "/images/team/fabian_waale.webp" "Fabian Wahle" "Strategic Advisor" >}}
    <ul>
      <li>PhD in Information Systems (ETH Zurich)</li>
      <li>M.Sc. in Artificial Intelligence (Maastricht University)</li>
      <li>
        Co-founder at <a href="https://neonexchange.org" target="_blank" alt="Nash">Nash</a></li>
      <li>
        Co-founder at <a href="https://cityofzion.io" target="_blank" alt="City of Zion">City of Zion</a></li>
      <li>
        Founder and lead software developer at <a href="https://altoida.com" target="_blank" alt="Altoida">Altoida</a></li>
    </ul>
  {{< /person >}}
  {{< person "5" "/images/team/roman_himov.webp" "Roman Khimov" "Chief Technical Officer" >}}
    <ul>
      <li>Diploma of Engineer in Embedded Systems (ITMO University)</li>
      <li>Former team lead at Kraftway Corporation and head of network equipment department at
        Altell</li>
    </ul>
  {{< /person >}}
  {{< person "7" "/images/team/anastasiya_prasolova.webp" "Anastasia Prasolova" "Software Engineer" >}}
    <ul>
      <li>B.Sc. in Software Engineering (ITMO University)</li>
      <li>Former software engineer at Dell-EMC, configuration manager at T-Systems, and also system administrator
        at Yandex</li>
    </ul>
  {{< /person >}}
  {{< person "8" "/images/team/leonard_lubitsch.webp" "Leonard Liubich" "Software Engineer" >}}
    <ul>
      <li>B.Sc. in Applied Mathematics &amp; Informatics (St. Petersburg State University)</li>
      <li>
        Former software engineer at R&amp;D Center "Metrotek"</li>
    </ul>
  {{< /person >}}
  {{< person "10" "/images/team/anna_shaleva.webp" "Anna Shaleva" "Software Engineer" >}}
    <ul>
      <li>M.Sc. in Applied Mathematics &amp; Informatics (St. Petersburg State University)</li>
      <li>Former software engineer at EPAM Systems Inc. and Distributed Ledger Technologies Center of St.
        Petersburg State University</li>
    </ul>
  {{< /person >}}
  {{< person "11" "/images/team/sergio_nemirowski.webp" "Sergio Nemirowski" "System Administrator" >}}
    <ul>
      <li>Phys-tech, Peter the Great St. Petersburg Polytechnic University</li>
      <li>Former system administrator at OKTET Labs</li>
    </ul>
  {{< /person >}}
  {{< person "14" "/images/team/angira_kekteeva.webp" "Angira Kekteeva" "Software Engineer" >}}
    <ul>
      <li>B.Sc. in Fundametnal Informatics and Information Technologies (St. Petersburg State University)</li>
      <li>Former software engineer at The_Covert and Krylov State Research Center</li>
    </ul>
  {{< /person >}}
  {{< person "16" "/images/team/mikhail_petrov.webp" "Mikhail Petrov" "Frontend Developer" >}}
    <ul>
      <li>B.Sc. in Fundamental Informatics and Information Technologies (St. Petersburg State University)</li>
      <li>Former frontend developer at Distributed Ledger Technologies Center of St. Petersburg State University
        and startup company Tensy</li>
    </ul>
  {{< /person >}}
  {{< person "17" "/images/team/maksim_gelbakhiani.webp" "Maksim Gelbakhiani" "DevOps Engineer" >}}
    <ul>
      <li>Applied Mathematics & Informatics (St. Petersburg State University)</li>
      <li>Former principal QA engineer at Yadro and Dell EMC</li>
    </ul>
  {{< /person >}}
  {{< person "18" "/images/team/oleg_kulachenko.webp" "Oleg Kulachenko" "QA Engineer" >}}
    <ul>
      <li>B.Sc. in Computer Science (ITMO University)</li>
      <li>Former principal software engineer at Yadro and senior QA engineer at Dell EMC</li>
    </ul>
  {{< /person >}}
  {{< person "19" "/images/team/evgenii_baidakov.webp" "Evgenii Baidakov" "Software Engineer" >}}
    <ul>
      <li>Specialist Degree in Computer Science (Voronezh State University)</li>
      <li>Former senior software developer at VK, OZON, and lead software developer at Game Insight</li>
    </ul>
  {{< /person >}}
{{< /persons >}}

{{< roadmap "Roadmap" >}}
  {{< roadmap_item "left" "Q1 2023" "Structural simplification" >}}
    <ul>
      <li>Inner ring and blockchain node unification</li>
      <li>System update procedure simplification</li>
      <li>Drop support for legacy NeoFS deployment modes</li>
      <li>Remove known contract-related limitations</li>
      <li>Extended error codes for NeoGo RPC protocol</li>
      <li>dBFT TLA+ model</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2022" "Fixes and optimization" >}}
    <ul>
      <li>Support for storage node maintenance mode</li>
      <li>Extended test suite, fixes for tens of problems found</li>
      <li>Tree-service optimization</li>
      <li>Additional metrics for storage and IR nodes</li>
      <li>
        NeoGo:
        <ul>
          <li>Configuration refactoring</li>
          <li>Support for structures in the smart contract RPC bindings generator</li>
          <li>Neo 3.5.0 compatibility</li>
        </ul>
      </li>
      <li>Public Neo networks update</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2022" "Technological improvements" >}}
    <ul>
      <li>
        Local data storage:
        <ul>
          <li>Configuration refactoring</li>
          <li>Storage scheme optimization and refactoring</li>
        </ul>
      </li>
      <li>
        Tree-service component improvement to work with S3:
        <ul>
          <li>Synchronization of trees between nodes</li>
          <li>Replication optimization</li>
          <li>Sharding</li>
        </ul>
      </li>
      <li>Additional storage node metrics <br>(write cache and Tree-service)</li>
      <li>
        S3 Gateways:
        <ul>
          <li>Authentication/authorization mechanism rework</li>
          <li>IAM-compatible access control schemes</li>
          <li>REST Gateway</li>
        </ul>
      </li>
      <li>
        CDN:
        <ul>
          <li>Accounting</li>
          <li>Domain binding</li>
          <li>Options for integration with external systems</li>
        </ul>
      </li>
      <li>Advanced monitoring of all services</li>
      <li>
        NeoGo:
        <ul>
          <li>RPC client refactoring</li>
          <li>Wrappers for calling contracts via RPC</li>
          <li>dBFT improvements</li>
          <li>Implementation and support of Neo protocol changes</li>
        </ul>
      </li>
      <li>Launch in Neo T5 Testnet network</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2022" "NeoFS for the Real Economy" >}}
    <ul>
      <li>
        Dynamic eACL rules
      </li>
      <li>
        Acceleration of work with versions of objects
      </li>
      <li>
        Improved S3 ACL support
      </li>
      <li>
        Authorization from an external source
      </li>
      <li>
        Background logical integrity check
      </li>
      <li>
        Dynamic inner ring extension
      </li>
      <li>
        Lightweight NeoGo nodes
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2022" "NeoFS Improvement" >}}
    <ul>
      <li>
        Enabling the notary system
      </li>
      <li>
        Support for object versioning
      </li>
      <li>
        NeoFS CDN launch
      </li>
      <li>
        Neofs-sdk-go v1.0.0 release with integration examples
      </li>
      <li>
        Notifications API support
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2021" "NeoFS Community Support" >}}
    <ul>
      <li>
        Storage engine
        <ul>
          <li>
            Dynamic queues
          </li>
          <li>
            Data replication upgrade
          </li>
          <li>
            Data evacuation
          </li>
          <li>
            Background scrubber
          </li>
          <li>
            Degradation mode
          </li>
        </ul>
      </li>
      <li>
        DNS/NNS in SDK
      </li>
      <li>
        NeoFS documentation release
      </li>
      <li>
        S3 app compatibility
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2021" "NeoFS MainNet" >}}
    <ul>
      <li>
        NeoFS MainNet release
      </li>
      <li>
        NeoGo MainNet release
      </li>
      <li>
        Economic model optimization
      </li>
      <li>
        ACL translation for gateways
      </li>
      <li>
        Detailed documentation, community helper tools and papers
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2021" "NeoFS Services" >}}
    <ul>
      <li>
        Storage engine optimizations
      </li>
      <li>
        HTTP gateway release
      </li>
      <li>
        S3 gateway release
      </li>
      <li>
        TLS support in storage nodes
      </li>
      <li>
        NeoGo N3-RC-compatible releases
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2021" "NeoFS in the Neo 3.0 Testnet" >}}
    <ul>
      <li>
        NeoFS launch in Neo 3.0 Testnet
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2020" "NeoFS Infrastructure" >}}
    <ul>
      <li>
        Service infrastructure implementation for the NeoFS public storage
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2020" "NeoFS 1.0 release" >}}
    <ul>
      <li>NeoFS v1.0 release and public access to the storage network</li>
      <li>NeoFS CDN and HTTP gateway</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2020" "NEO 3.0" >}}
    <ul>
      <li>Integration of NeoFS and Neo Blockchain smart contract</li>
      <li>NeoFS contract development</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2020" "Core components development completion" >}}
    <ul>
      <li>Reputation system design and implementation</li>
      <li>Implementation of adding and excluding the inner ring nodes</li>
      <li>Implementation of excluding storage nodes from the network map</li>
      <li>Implementation of support for new network protocols</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2019" "Testing and optimization" >}}
    <ul>
      <li>Closed NeoFS alpha test for Neo development community</li>
      <li>Open NeoFS alpha test</li>
      <li>Upgraded storage group model implementation</li>
      <li>Payment model balancing</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2019" "Alpha release" >}}
    <ul>
      <li>Incentive model release</li>
      <li>Proof-of-Concept launch</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2019" "Feature development" >}}
    <ul>
      <li>Data replication implementation</li>
      <li>Project presentation to Neo community</li>
      <li>Implementation of smart contract and payment methods for data storage</li>
      <li>API design</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2019" "Platform development" >}}
    <ul>
      <li>Implementation of methods to work with physical blob storage</li>
      <li>Metadata storage implementation</li>
      <li>Implementation of data audit and data validation methods</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2018" "Start" >}}
    <ul>
      <li>Development process organization</li>
      <li>Design of basic project architecture and experiments</li>
      <li>Research plan release</li>
      <li>Network protocols (exchange and routing) implementation</li>
      <li>Implementation of the algorithm for objects placement and retrieval in the network</li>
    </ul>
  {{< /roadmap_item >}}
{{< /roadmap >}}
